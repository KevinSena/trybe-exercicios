"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const BookModel_1 = __importDefault(require("./database/models/BookModel"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield BookModel_1.default.findAll();
    return res.status(http_status_codes_1.StatusCodes.OK).json(result);
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
