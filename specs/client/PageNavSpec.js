describe('Page Nav', function(){

  var TestUtils, pageNav, pageMockAction, holder;

  beforeEach(function(){
    TestUtils = React.addons.TestUtils;
    pageNav = React.createElement(app.PageNav, null);
    holder = app.PageActions;
    app.PageActions = {
      navigate: function(props){
        pageMockAction = props;
      }
    };
    pageNav = TestUtils.renderIntoDocument(pageNav);
  });

  afterEach(function(){
    app.PageActions = holder;
  });

  it('should render the body', function(){
    expect(pageNav.refs.body).to.be.ok();
  });

  it('should handle a click', function(){
    TestUtils.Simulate.click(pageNav.refs.welcome.getDOMNode());
    expect(pageMockAction.dest).to.equal('welcome');
  });

});
