$$( function ( require, exports ){
  var controllr = require( 'controller' );
  var model     = require( 'model' );
  var Project   = model( 'PROTOAPP::Project' );

  controllr( 'PROTOAPP::Projects' ,{

    init : function ( before, after ){
      before( this.validate_index, only : [ 'index' ]);
    },

    index : function ( req, res ){
      Project.index( req.params, function ( projects ){
        res.append( 'PROTOAPP::Projects.index', {
          $target  : req.$el,
          title    : req.local.title,
          projects : projects
        });
      });
    }
  });
});
