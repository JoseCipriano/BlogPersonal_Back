import { Router } from "express";
import { addPublication, deletePublication, getPublications, getPublicationsByCourse, getPublicationsById, getPublicationsIndex, updatePublication } from "./publication.controller.js";

const router = Router();

router.post(
        '/addPublication',
        addPublication
);

router.get(
        '/publications', 
        getPublications
);

router.get(
        '/:course',
        getPublicationsByCourse
);

router.get(
        '/',
        getPublicationsIndex
)

router.get(
        '/publication/:publicationId', 
        getPublicationsById
)

router.put(
        '/updatePublication/:publicationId', 
        updatePublication   
)

router.delete(
        '/deletePublication/:publicationId',
        deletePublication
)

export default router;
