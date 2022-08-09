const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config();

const PORT = process.env.PORT || process.env.API_PORT