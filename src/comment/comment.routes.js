import { Router } from "express";
import { addComment, getCommentByPublication } from "./comment.controller.js";

const router = Router();

router.post(
        '/:publicationId/addComment',

        addComment
)

router.get(
        '/:publicationId/comments',

        getCommentByPublication
)

export default router;