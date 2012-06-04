$$( function ( require, exports ){

  var api = require( 'api' );

  api({

    Project : {
      create  : 'POST   /api/projects',
      index   : 'GET    /api/projects',
      show    : 'GET    /api/projects/:id',
      update  : 'PUT    /api/projects/:id',
      destroy : 'DELETE /api/projects/:id'
    },

    Mockup : {

    }
  });
});
