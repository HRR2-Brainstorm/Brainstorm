describe('Ideas Component', function(){

  var TestUtils, idea;

  beforeEach(function(){
    TestUtils = React.addons.TestUtils;
    idea = React.createElement(app.Idea, null);

    idea = TestUtils.renderIntoDocument(idea);
  });

  it('should render the body', function(){
    expect(idea.refs.body).to.be.ok();
  });

});
