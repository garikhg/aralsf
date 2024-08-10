import {Router, Request, Response} from "express";import auth, {AuthRequest} from "../middleware/auth";import Item, {ItemDocument} from "../models/Item";const router: Router = Router();// Create an itemrouter.post("/", auth, async (req: AuthRequest, res: Response) => {    try {        const newItem: ItemDocument = new Item(req.body);        const savedItem = await newItem.save();        res.status(201).json(savedItem);    } catch (err) {        res.status(500).json({message: err});    }});// Read all itemsrouter.get("/", auth, async (req: Request, res: Response) => {    try {        const items = await Item.find();        res.status(200).json(items);    } catch (err) {        res.status(500).json({message: err});    }});// Update an itemrouter.get("/:id", auth, async (req: AuthRequest, res: Response) => {    try {        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});        res.status(200).json(updatedItem);    } catch (err) {        res.status(500).json({message: err});    }});// Delete an itemrouter.delete("/:id", auth, async (req: AuthRequest, res: Response) => {    try {        await Item.findByIdAndDelete(req.params.id);        res.status(200).json({message: 'Item deleted'});    } catch (err) {        res.status(500).json({message: err});    }});export default router;