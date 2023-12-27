# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними
## SQL-Скрипт для створення початкового наповнення бази даних

```SQL
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mcanalyzer
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mcanalyzer` ;

-- -----------------------------------------------------
-- Schema mcanalyzer
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mcanalyzer` DEFAULT CHARACTER SET utf8mb3 ;
USE `mcanalyzer` ;

-- -----------------------------------------------------
-- Table `mcanalyzer`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`role` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`user` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Role_id`),
  INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mcanalyzer`.`role` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`mentionreport`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`mentionreport` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`mentionreport` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `creationDate` DATETIME NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `User_id`),
  INDEX `fk_MentionReport_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_MentionReport_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`pubrequest`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`pubrequest` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`pubrequest` (
  `User_id` INT UNSIGNED NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`User_id`),
  INDEX `fk_PubRequest_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_PubRequest_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`pubreview`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`pubreview` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`pubreview` (
  `status` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  `PubRequest_User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`User_id`, `PubRequest_User_id`),
  INDEX `fk_PubReview_PubRequest1_idx` (`PubRequest_User_id` ASC) VISIBLE,
  CONSTRAINT `fk_PubReview_PubRequest1`
    FOREIGN KEY (`PubRequest_User_id`)
    REFERENCES `mcanalyzer`.`pubrequest` (`User_id`),
  CONSTRAINT `fk_PubReview_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`resultdata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`resultdata` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`resultdata` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sourse` VARCHAR(255) NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `mentionedAt` DATETIME NOT NULL,
  `mentions` INT NOT NULL,
  `MentionReport_id` INT UNSIGNED NOT NULL,
  `MentionReport_User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `MentionReport_id`, `MentionReport_User_id`),
  INDEX `fk_ResultData_MentionReport1_idx` (`MentionReport_id` ASC, `MentionReport_User_id` ASC) VISIBLE,
  CONSTRAINT `fk_ResultData_MentionReport1`
    FOREIGN KEY (`MentionReport_id` , `MentionReport_User_id`)
    REFERENCES `mcanalyzer`.`mentionreport` (`id` , `User_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mcanalyzer`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mcanalyzer`;
INSERT INTO `mcanalyzer`.`role` (`id`, `name`, `description`) VALUES (1, 'User', 'Registered user, can get info about mentions');
INSERT INTO `mcanalyzer`.`role` (`id`, `name`, `description`) VALUES (2, 'Editor', 'Can do the same as the user, can edit data');
INSERT INTO `mcanalyzer`.`role` (`id`, `name`, `description`) VALUES (3, 'Admin', 'Can do the same as other, can give roles and can block users');

COMMIT;
```

## RESTfull сервіс для управління даними

### server.js
```JavaScript
'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const resDataRoutes = require('./routes/resDataRoutes');
const mentRepRouter = require('./routes/mentRepRouter');

app.use(express.json());
app.use('/userRoutes', userRoutes);
app.use('/roleRoutes', roleRoutes);
app.use('/resDataRoutes',resDataRoutes);
app.use('/mentRepRoutes',mentRepRouter);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req ,res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### database.js
```JavaScript
'use strict';

require('dotenv').config();
const mysql = require('mysql2');

const access = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
};

const dataBase = mysql.createConnection(access);
dataBase.connect((err) => {
  if (err) {
    console.error('Database connection error ' + err.stack);
    return;
  }
  console.log('Connected to database from id ' + dataBase.threadId);
});

module.exports = dataBase;
```

### userRoutes.js
```JavaScript
'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = new express.Router();


router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUser)
    .put(userController.updatePassword)
    .delete(userController.deleteUser);

module.exports = router;
```

### roleRoutes.js
```JavaScript
'use strict';

const express = require('express');
const roleController = require('../controllers/roleController');
const router = new express.Router();

router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRole);

module.exports = router;
```

### resDataRoutes.js
```JavaScript
'use strict';

const express = require('express');
const resDataController = require('../controllers/resDataController');
const router = new express.Router();

router
    .route('/')
    .get(resDataController.getAllResData)
    .post(resDataController.createResData);

router
    .route('/:id')
    .get(resDataController.getResData)
    .delete(resDataController.delResData);

module.exports = router;
```

### mentRepRoutes.js
```JavaScript
'use strict';

const express = require('express');
const resDataController = require('../controllers/mentRepController');
const router = new express.Router();

router
    .route('/')
    .get(resDataController.getAllMentReps)
    .post(resDataController.createMentRep);

router
    .route('/:id')
    .get(resDataController.getMentRep)
    .delete(resDataController.delMentRep);

module.exports = router;
```
### userController.js
```JavaScript
'use strict';

const dataBase = require('../database');

const createUser = (req,res,next) => {
    const user = req.body;
    const query = 'INSERT INTO User SET ?';

    dataBase.query(query, user, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...user });
    });
};

const getAllUsers = (req, res) => {
    const query = 'SELECT * FROM User';
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const getUser = (req,res,next) => {

    const id = req.params.id;
    const query = `SELECT * FROM User WHERE id = ${id}`;
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};


const updatePassword = (req,res,next) => {
    const id = req.params.id;
    const updatedData = req.body;
    const query = `UPDATE User SET ? WHERE id = ${id}`;
    dataBase.query(query, updatedData, (err) => {
      if (err) throw err;
      res.json({ id: id, ...updatedData });
    });
};

const deleteUser = (req,res,next) => {
    const id = req.params.id;
    const query = `DELETE FROM User WHERE id = ${id}`;
    dataBase.query(query, (err) => {
        if (err) throw err;
        res.json({ id: id, message: 'User successfully deleted'});
    });
};

module.exports = {
    createUser, 
    getAllUsers, 
    getUser, updatePassword, 
    deleteUser
};
```

### roleController.js
```JavaScript
'use strict';

const dataBase = require('../database');

const getAllRoles = (req,res,next) => {
    const query = 'SELECT * FROM Role';
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const getRole = (req,res,next) => {
    const id = req.params.id;
    const query = `SELECT * FROM Role WHERE id = ${id}`;
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

module.exports = {getAllRoles,getRole};
```

### resDataController.js
```JavaScript
'use strict';

const dataBase = require('../database');

const createResData = (req,res,next) => {
    const resData = req.body;
    const query = 'INSERT INTO ResultData SET ?';

    dataBase.query(query, resData, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...resData });
    });
};

const getAllResData = (req,res,next) => {
    const query = 'SELECT * FROM ResultData';
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const getResData = (req,res,next) => {
    const id = req.params.id;
    const query = `SELECT * FROM ResultData WHERE id = ${id}`;
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const delResData = (req,res,next) => {
    const id = req.params.id;
    const query = `DELETE FROM ResultData WHERE id = ${id}`;
    dataBase.query(query, (err) => {
        if (err) throw err;
        res.json({ id: id, message: 'Result data successfully deleted'});
    });
};

module.exports = {
    createResData,
    getAllResData,
    getResData,
    delResData,
};
```

### reptMentController.js
```JavaScript
'use strict';

const dataBase = require('../database');


const createMentRep = (req,res,next) => {
    const mentRep = req.body;
    const query = 'INSERT INTO MentionReport SET ?';

    dataBase.query(query, mentRep, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...mentRep });
    });
};

const getAllMentReps = (req, res) => {
    const query = 'SELECT * FROM MentionReport';
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const getMentRep = (req,res,next) => {
    const id = req.params.id;
    const query = `SELECT * FROM MentionReport WHERE id = ${id}`;
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const delMentRep = (req,res,next) => {
    const id = req.params.id;
    const query = `DELETE FROM MentionReport WHERE id = ${id}`;
    dataBase.query(query, (err) => {
        if (err) throw err;
        res.json({ id: id, message: 'Mention Report successfully deleted'});
    });
};

module.exports = {
    createMentRep,
    getAllMentReps,
    getMentRep,
    delMentRep,
};
```

