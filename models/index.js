const models = [
    Users,
   
  ];
  
  export {
Users
  };
  
//   export const connectToDb = async cb?: ()  => {
//     try {
//       await Promise.all(
//         models.map(async (model) => await model.sync({ force: false }))
//       );
//       cb && cb();
//       logger.info(`✅ [success]: connected to database!  `);
//     } catch (e) {
//       logger.error({ e });
//       process.exit(1);
//     }
//   };
  