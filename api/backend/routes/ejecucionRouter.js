"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ejecucionController_1 = require("../controllers/ejecucionController");
var router = (0, express_1.Router)();
router.route('/validarCirculacion')
    .post(function (req, res) {
    ejecucionController_1.default.validarCirculacion(req, res);
});
exports.default = router;
