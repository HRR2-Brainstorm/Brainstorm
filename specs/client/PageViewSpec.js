describe('PageView', function(){

  var TestUtils, pageView;

  beforeEach(function(){
    TestUtils = React.addons.TestUtils;
    pageView = React.createElement(app.PageView, null);
    pageView = TestUtils.renderIntoDocument(pageView);
  });

  it('should render the body', function(){
    expect(pageView.refs.body).to.be.ok();
  });

  it('should update its state when the PageStore changes', function(){

    app.PageActions.navigate({
      dest: 'welcome'
    });

    expect(pageView.refs.body.getDOMNode().textContent).to.contain('welcome');

    app.PageActions.navigate({
      dest: 'rooms',
      props: '0'
    });

    expect(pageView.refs.body.getDOMNode().textContent).to.contain('room');
    expect(pageView.refs.body.getDOMNode().textContent).to.contain('0');

  });

});
