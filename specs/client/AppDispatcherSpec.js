describe('AppDispatcher',function(){

  it('should be an instance of the Dispatcher',function(done){
    expect(app.AppDispatcher instanceof Flux.Dispatcher).to.equal(true);
    done();
  });

});
