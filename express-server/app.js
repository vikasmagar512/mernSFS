// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';

// import routes
// import todoRoutes from './routes/todo.server.route';
import assetRoutes from './routes/asset.server.route';
import accessoriesRoutesRoutes from './routes/accessory.server.route';
import agreementRoutes from './routes/agreement.server.route';
import rentalRoutesRoutes from './routes/rental.server.route';
import customerRoutesRoutes from './routes/customer.server.route';
import vendorRoutesRoutes from './routes/vendor.server.route';
import stockDetailsRoutesRoutes from './routes/stockDetail.server.route';
import orderDetailsRoutesRoutes from './routes/orderDetail.server.route';
import quotationDetailsRoutesRoutes from './routes/quotationDetail.server.route';
import equipmentsRoutesRoutes from './routes/equipment.server.route';

// define our app using express
const app = express();

// express-busboy to parse multipart/form-data
bb.extend(app);

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


// set the port
const port = process.env.PORT || 3001;

// connect to database
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/mern-todo-app', {
mongoose.connect('mongodb://localhost/sfs', {
  useMongoClient: true,
});

// add Source Map Support
SourceMapSupport.install();

// app.use('/api', todoRoutes);
app.use('/assets', assetRoutes);
app.use('/agreements', agreementRoutes);
app.use('/rental', rentalRoutesRoutes);
app.use('/customers', customerRoutesRoutes);
app.use('/vendors', vendorRoutesRoutes);
app.use('/stockDetails', stockDetailsRoutesRoutes);
app.use('/orderDetails', orderDetailsRoutesRoutes);
app.use('/accessories', accessoriesRoutesRoutes);
app.use('/quotations', quotationDetailsRoutesRoutes);
app.use('/equipments', equipmentsRoutesRoutes);

app.get('/', (req,res) => {
  return res.end('Api working');
})

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});



// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
