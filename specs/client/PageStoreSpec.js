describe('paging', function(){

  var welcomeHolder = app.PageStore.welcome;
  var roomsHolder = app.PageStore.rooms;

  beforeEach(function(){
    app.PageStore.welcome = welcomeHolder;
    app.PageStore.rooms = roomsHolder;
  });

  it('should have a welcome route that invokes a callback', function(){
    var counter = 0;
    app.PageStore.welcome = function(){counter++;};
    app.PageActions.navigate({
      dest: 'welcome'
    });
    expect(counter).to.equal(1);
  });

  it('should have a rooms route that passes the roomId to a callback', function(){
    var id;
    app.PageStore.rooms = function(roomId){id = roomId;};
    app.PageActions.navigate({
      dest: 'rooms',
      props: '0'
    });
    expect(id).to.equal('0');
  });

  it('should emit events when routing', function(){
    var callcount = 0;
    var callback = function(){callcount++;};

    app.PageStore.addChangeListener(callback);

    app.PageActions.navigate({
      dest: 'welcome'
    });

    expect(callcount).to.equal(1);

    app.PageActions.navigate({
      dest: 'rooms'
    });

    expect(callcount).to.equal(2);

    app.PageStore.removeChangeListener(callback);

  });

});
