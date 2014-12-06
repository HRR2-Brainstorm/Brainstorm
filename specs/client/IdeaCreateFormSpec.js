describe('Idea Form', function(){

  var TestUtils,ideaCreateForm,ideaMockAction;

  beforeEach(function(){
    TestUtils = React.addons.TestUtils;
    ideaCreateForm = React.createElement(app.IdeaCreateForm, null);
    app.IdeaActions = {
      create:function(text){
        ideaMockAction = text;
      }
    };
    ideaCreateForm = TestUtils.renderIntoDocument(ideaCreateForm);
  });

  it('should render the body', function(){
    expect(ideaCreateForm.refs.body).to.be.ok();
  });

  it('should handle a click', function(){
    ideaCreateForm.refs.body.getDOMNode().value = 'test';
    TestUtils.Simulate.submit(ideaCreateForm.refs.form.getDOMNode());
    expect(ideaMockAction).to.equal('test');
  });

});
