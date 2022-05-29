/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/config/index.js":
/*!********************************!*\
  !*** ./server/config/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n//this file is the single source of truth of all things configuration in an environment variable\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  db: {\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASS,\n    database: process.env.DB_SCHEMA\n  },\n  jwt: {\n    secret: process.env.JWT_SECRET,\n    expires: process.env.JWT_EXPIRE\n  }\n});\n\n//# sourceURL=webpack://auth-auth/./server/config/index.js?");

/***/ }),

/***/ "./server/db/index.js":
/*!****************************!*\
  !*** ./server/db/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Query\": () => (/* binding */ Query),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./server/config/index.js\");\n/* harmony import */ var _queries_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries/users */ \"./server/db/queries/users.js\");\n\n\nconst pool = mysql__WEBPACK_IMPORTED_MODULE_0__.createPool(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].db);\nconst Query = (query, values) => {\n  return new Promise((resolve, reject) => {\n    pool.query(query, values, (err, results) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(results);\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  users: _queries_users__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://auth-auth/./server/db/index.js?");

/***/ }),

/***/ "./server/db/queries/users.js":
/*!************************************!*\
  !*** ./server/db/queries/users.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./server/db/index.js\");\n\n\nconst find = (column, value) => (0,___WEBPACK_IMPORTED_MODULE_0__.Query)('SELECT * FROM users WHERE ?? = ?', [column, value]);\n\nconst insert = (email, password) => (0,___WEBPACK_IMPORTED_MODULE_0__.Query)('INSERT INTO users (email, password) VALUE (?, ?)', [email, password]);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  find,\n  insert\n});\n\n//# sourceURL=webpack://auth-auth/./server/db/queries/users.js?");

/***/ }),

/***/ "./server/middlewares/auth.mw.js":
/*!***************************************!*\
  !*** ./server/middlewares/auth.mw.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tokenCheck\": () => (/* binding */ tokenCheck)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction tokenCheck(req, res, next) {\n  passport__WEBPACK_IMPORTED_MODULE_0___default().authenticate('jwt', (err, user, info) => {\n    if (err) {\n      return next(err);\n    }\n\n    if (info) {\n      info.message === \"invalid token\";\n      return res.status(401).json({\n        message: \"this is not the token you are looking for\"\n      });\n    }\n\n    if (!user) {\n      return res.status(401).json({\n        message: \"redirect to login\"\n      });\n    }\n\n    req.user = user;\n    next();\n  })(req, res, next);\n}\n\n//# sourceURL=webpack://auth-auth/./server/middlewares/auth.mw.js?");

/***/ }),

/***/ "./server/middlewares/passport-strategies.mw.js":
/*!******************************************************!*\
  !*** ./server/middlewares/passport-strategies.mw.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db */ \"./server/db/index.js\");\n/* harmony import */ var _utils_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/password */ \"./server/utils/password.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./server/config/index.js\");\n\n\n\n\n\n\npassport__WEBPACK_IMPORTED_MODULE_0__.serializeUser((user, done) => {\n  if (user.password) {\n    delete user.password; //security\n  }\n\n  done(null, user);\n});\npassport__WEBPACK_IMPORTED_MODULE_0__.deserializeUser((user, done) => done(null, user));\npassport__WEBPACK_IMPORTED_MODULE_0__.use(new passport_local__WEBPACK_IMPORTED_MODULE_1__.Strategy({\n  usernameField: 'email',\n  session: false\n}, async (email, password, done) => {\n  try {\n    const [userFound] = await _db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].users.find('email', email);\n\n    if (userFound && (0,_utils_password__WEBPACK_IMPORTED_MODULE_4__.compareHash)(password, userFound.password)) {\n      done(null, userFound);\n    } else {\n      done(null, false);\n    }\n  } catch (error) {\n    done(error);\n  }\n}));\npassport__WEBPACK_IMPORTED_MODULE_0__.use(new passport_jwt__WEBPACK_IMPORTED_MODULE_2__.Strategy({\n  jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_2__.ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: _config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].jwt.secret\n}, (payload, done) => {\n  try {\n    done(null, payload);\n  } catch (error) {\n    done;\n  }\n\n  console.log(payload);\n}));\n\n//# sourceURL=webpack://auth-auth/./server/middlewares/passport-strategies.mw.js?");

/***/ }),

/***/ "./server/routes/api/index.js":
/*!************************************!*\
  !*** ./server/routes/api/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ \"./server/routes/api/token.js\");\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.use('/token', _token__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/api/index.js?");

/***/ }),

/***/ "./server/routes/api/token.js":
/*!************************************!*\
  !*** ./server/routes/api/token.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middlewares_auth_mw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middlewares/auth.mw */ \"./server/middlewares/auth.mw.js\");\n//an endpoint I want to protect and access in my components\n//requires a token to be in local storage to access this endpoint\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.get('/', _middlewares_auth_mw__WEBPACK_IMPORTED_MODULE_1__.tokenCheck, (req, res) => {\n  try {\n    res.json({\n      message: `Hell Yeah, got that token ${req.user.email}!!!`\n    });\n  } catch (error) {\n    console.log(error);\n    res.status(500).json({\n      message: 'my code sucks',\n      error: error.message\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/api/token.js?");

/***/ }),

/***/ "./server/routes/auth/index.js":
/*!*************************************!*\
  !*** ./server/routes/auth/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./server/routes/auth/login.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./server/routes/auth/register.js\");\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.use('/login', _login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/register', _register__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/auth/index.js?");

/***/ }),

/***/ "./server/routes/auth/login.js":
/*!*************************************!*\
  !*** ./server/routes/auth/login.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./server/config/index.js\");\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();\nrouter.post('/', passport__WEBPACK_IMPORTED_MODULE_1__.authenticate('local', {\n  successRedirect: '',\n  failureRedirect: '',\n  session: false\n}), async (req, res) => {\n  try {\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign({\n      userid: req.user.id,\n      email: req.user.email,\n      role: 'guest'\n    }, _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwt.secret, {\n      expiresIn: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwt.expires\n    }); //payload \n\n    res.json(token);\n  } catch (error) {\n    console.log(error);\n    res.status(500).json({\n      message: 'my code sucks!'\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/auth/login.js?");

/***/ }),

/***/ "./server/routes/auth/register.js":
/*!****************************************!*\
  !*** ./server/routes/auth/register.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db */ \"./server/db/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./server/config/index.js\");\n/* harmony import */ var _utils_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/password */ \"./server/utils/password.js\");\n\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)();\nrouter.post('/', async (req, res) => {\n  const newUser = req.body;\n\n  try {\n    newUser.password = (0,_utils_password__WEBPACK_IMPORTED_MODULE_4__.generateHash)(newUser.password);\n    const result = await _db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].users.insert(req.body.email, req.body.password);\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign({\n      userid: result.insertId,\n      email: newUser.email,\n      role: 'guest'\n    }, _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwt.secret, {\n      expiresIn: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwt.expires\n    });\n    console.log(newUser);\n    res.json(token);\n  } catch (error) {\n    console.log(error);\n    res.status(500).json({\n      message: 'my code sucks!'\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/auth/register.js?");

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./server/routes/api/index.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ \"./server/routes/auth/index.js\");\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.use('/api', _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/auth', _auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://auth-auth/./server/routes/index.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./server/routes/index.js\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middlewares_passport_strategies_mw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/passport-strategies.mw */ \"./server/middlewares/passport-strategies.mw.js\");\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\napp.use(passport__WEBPACK_IMPORTED_MODULE_2__.initialize()); //this makes it available middleware\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"]('public'));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__.json());\napp.use(_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.get('*', (req, res) => {\n  res.sendFile(path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, '../public/index.html'));\n}); //this says I need some client side routing that needs to happen\n//thats not associaated with my server side routes (they will always be\n//when you hit enter or refresh in the url bar). the * will catch any but\n//you could put specific ['/login', '/token'] in place of '*'  \n\nconst port = process.env.Port || 3000;\napp.listen(port, () => {\n  console.log(`Server listening on port: ${port}`);\n});\nconsole.log('You can do it!!');\n\n//# sourceURL=webpack://auth-auth/./server/server.js?");

/***/ }),

/***/ "./server/utils/password.js":
/*!**********************************!*\
  !*** ./server/utils/password.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compareHash\": () => (/* binding */ compareHash),\n/* harmony export */   \"generateHash\": () => (/* binding */ generateHash)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n //generateHash('password123'); \n\nfunction generateHash(password) {\n  const salt = bcrypt__WEBPACK_IMPORTED_MODULE_0__.genSaltSync(12);\n  const hash = bcrypt__WEBPACK_IMPORTED_MODULE_0__.hashSync(password, salt);\n  return hash;\n}\nfunction compareHash(password, hashed) {\n  return bcrypt__WEBPACK_IMPORTED_MODULE_0__.compareSync(password, hashed);\n} // console.log(generateHash('password123'));\n// console.log(compareHash('password123', '$2b$12$YKmf3M4uLKDO8jpFx6sQYO96OknleImqWCa9GYwGHr53xgIjySEne'))\n\n//# sourceURL=webpack://auth-auth/./server/utils/password.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	
/******/ })()
;