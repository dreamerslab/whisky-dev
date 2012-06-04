$$( function ( require, exports ){
  var Controllr = require( 'Controller' );
  var model     = require( 'model' );
  var Mockup    = model( 'PROTOAPP::Mockup' );

  var Mockups = Controllr.extend({

    init : function ( before, after ){
      before( this.validate_index, only : [ 'index' ]);
      before( this.partial_index,  only : [ 'index' ]);
      after( this.remove_desc,     only : [ 'index' ]);
    },

    remove_desc : function ( req, res, next ){
      $( '#mockups-desc' ).
        fadeOut( 300, function (){
          $( this ).remove();
        });
    },

    index : function ( req, res, next ){
      var args = req.params;

      args.sess_mockups = req.session.mockups;

      Mockup.index( args,
        // index
        function ( mockups ){
          res.append( 'PROTOAPP::Mockups.index', {
            $target : $( 'body' ),
            title   : req.locale.title,
            mockups : mockups
          });

          next();
        },
        // partial update
        function (){

          next();
        });
    },

    show : function ( req, res, next ){

    }
  });

  exports( 'PROTOAPP::MockupsController', Mockups );
});
