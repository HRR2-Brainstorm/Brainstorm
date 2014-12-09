describe('Idea Form', function(){

  var TestUtils, ideaForm, ideaMockAction;

  beforeEach(function(){
    TestUtils = React.addons.TestUtils;
    ideaForm = React.createElement(app.IdeaForm, null);
    app.IdeaActions = {
      create:function(text){
        ideaMockAction = text;
      }
    };
    ideaForm = TestUtils.renderIntoDocument(ideaForm);
  });

  it('should render the body', function(){
    expect(ideaForm.refs.name).to.be.ok();
  });

  it('should handle a click', function(){
    ideaForm.refs.name.getDOMNode().value = 'test';
    TestUtils.Simulate.submit(ideaForm.refs.form.getDOMNode());
    expect(ideaMockAction).to.equal('test');
  });

});
