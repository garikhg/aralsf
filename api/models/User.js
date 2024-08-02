const mongoose = require( 'mongoose' );const bcrypt = require( 'bcryptjs' );const jwt = require( "jsonwebtoken" );const userSchema = new mongoose.Schema( {    name: {        type: String,        required: true    },    email: {        type: String,        required: false,        unique: true    },    password: {        type: String,        required: true    }} );// Hash the user's password before saving it to the databaseuserSchema.pre( 'save', async function ( next ) {    if ( ! this.isModified( 'password' ) ) return next();    this.password = await bcrypt.hash( this.password, 12 );    next();} );// Method to compare the password with the hashed password in the databaseuserSchema.methods.comparePassword = async function ( candidatePassword ) {    return await bcrypt.compare( candidatePassword, this.password );};// Method to generate a JWT tokenuserSchema.methods.generateAuthToken = function () {    return jwt.sign( { id: this._id, email: this.email }, process.env.JWT_SECRET, {        expiresIn: '1h',    } );};module.exports = mongoose.models.User || mongoose.model( 'User', userSchema );