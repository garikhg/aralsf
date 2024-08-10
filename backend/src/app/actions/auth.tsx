import {SignupFormSchema} from "@/lib/definitions";export async function signup(FormData: FormData) {    // Validate form fields    const validatedFields = SignupFormSchema.safeParse({        username: FormData.get('username'),        email: FormData.get('email'),        password: FormData.get('password')    });    // If any form fields are invalid, return early    if (!validatedFields.success) {        return {            errors: validatedFields.error.flatten().fieldErrors,        }    }    // Call the provider or db to create a user...    //console.log(validatedFields)}