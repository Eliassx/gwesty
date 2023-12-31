const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session"); //Criar a sessão do usuário na aplicação
const FileStore = require("session-file-store")(session); //Salvar as sessões na pasta session
const flash = require("express-flash");

const app = express();

const connect = require('./src/database/connect');

//Importar as tabelas - Models
const Services = require('./src/models/Services');
const Products = require('./src/models/Products');
const Noun = require('./src/models/Noun');
const Stocks = require('./src/models/Stocks');
const Guest = require('./src/models/Guest');
const Reserve = require('./src/models/Reserve');
// const Comsuption = require('./src/models/Comsuption');
const Official = require('./src/models/Official');

//Importar as ROTAS - router
const ServicesRoutes = require('./src/routes/ServicesRoutes');
const ProductsRoutes = require('./src/routes/ProductsRoutes');
const NounRoutes = require('./src/routes/NounRoutes');
const StocksRoutes = require('./src/routes/StocksRoutes');
const GuestRoutes = require('./src/routes/GuestRoutes');
const ReserveRoutes = require('./src/routes/ReserveRoutes');
// const ComsuptionRoutes = require('./src/routes/ComsuptionRoutes');
const OfficialRoutes = require('./src/routes/OfficialRoutes');

const hbs = exphbs.create({
  partialsDir: ['views/partials']
});

app.engine("handlebars", exphbs.engine(
  { 
    defaultLayout: 'main',
    helpers: {
      formatDate: (date) => {
          return moment(date).format('DD/MM/YYYY')
      }
    }
  }
  ));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    name:"session",
    secret:"SENHA_COM_SUPER_CRIPTOGRAFIA", 
    resave: false, 
    saveUninitialized: false,
    store: new FileStore({
      logFn: function(){},
      path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie:{
      secure:false,
      maxAge:360000, //Um dia
      expires: new Date(Date.now() + 360000), //Forçar expirar em momento
      httpOnly: true
    }
  })
);

app.use(flash());

app.use(express.static("./src/public"));

app.use((request, response, next)=>{
  if(request.session.userId){
    response.locals.session = request.session
  }
  next()
});

//USAR AS ROTAS
// /nomeMiddle/nomeRota
app.use('/', ServicesRoutes);
app.use('/', ProductsRoutes);
app.use('/', NounRoutes);
app.use('/', StocksRoutes);
app.use('/', GuestRoutes);
app.use('/', ReserveRoutes);
// app.use('/', ComsuptionRoutes);
app.use('/', OfficialRoutes);


app.get('/', (request, response) => {
  return response.render('home')
});

connect
// .sync({force:true})
.sync()
.then(()=>{
  app.listen(8080);
})
.catch((err)=>console.log(err))