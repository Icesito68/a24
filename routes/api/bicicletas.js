/**
 * @swagger
 * components:
 *   schemas:
 *     Bicycle:
 *       type: object
 *       required:
 *         - id
 *         - color
 *         - modelo
 *         - ubicacion
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the bicycle
 *         color:
 *           type: string
 *           description: The color of the bicycle
 *         modelo:
 *           type: string
 *           description: The model of the bicycle
 *         ubicacion:
 *           type: string
 *           description: The current location of the bicycle
 *       example:
 *         id: abc123
 *         color: Red
 *         modelo: Orbea
 *         ubicacion: Central Park
 */

/**
 * @swagger
 * tags:
 *   name: Bicycles
 *   description: API for managing bicycles
 * /api/bicicletas:
 *   get:
 *     summary: Lists all the bicycles
 *     tags: [Bicycles]
 *     responses:
 *       200:
 *         description: The list of bicycles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicycle'
 * /api/bicicletas/create:
 *   post:
 *     summary: Create a new bicycle
 *     tags: [Bicycles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicycle'
 *     responses:
 *       200:
 *         description: The bicycle was created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicycle'
 *       500:
 *         description: Some server error
 * /api/bicicletas/update/{id}:
 *   put:
 *     summary: Update a bicycle by id
 *     tags: [Bicycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bicycle id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicycle'
 *     responses:
 *       200:
 *         description: The bicycle was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicycle'
 *       404:
 *         description: The bicycle was not found
 *       500:
 *         description: Some server error
 * /api/bicicletas/delete/{id}:
 *   delete:
 *     summary: Remove a bicycle by id
 *     tags: [Bicycles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The bicycle id
 *     responses:
 *       200:
 *         description: The bicycle was deleted
 *       404:
 *         description: The bicycle was not found
 */

let express = require("express");
let router = express.Router();
let BicicletaControllerAPI = require("../../controllers/api/BicicletaControllerAPI");

router.get("/", BicicletaControllerAPI.bicicleta_list);
router.post("/create", BicicletaControllerAPI.bicicleta_create);
router.delete("/delete", BicicletaControllerAPI.bicicleta_delete);
router.put("/update", BicicletaControllerAPI.bicicleta_update);

module.exports = router;
