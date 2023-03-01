import { Router } from "express";
import { getCards, createCards, deleteCard, updateCard } from "../controllers/cards.js";

const router = Router()

router.get("/", getCards)
router.post("/", createCards)
router.patch("/:id", updateCard)
router.delete("/:id", deleteCard)

export default router