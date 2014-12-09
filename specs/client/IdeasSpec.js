describe('Ideas Component', function(){

  var TestUtils, ideas, holder, CHANGE_EVENT;

  beforeEach(function(){
    CHANGE_EVENT = 'change';
    TestUtils = React.addons.TestUtils;
    ideas = React.createElement(app.Ideas, null);
    holder = app.IdeaStore;
    app.IdeaStore = _.extend({}, EventEmitter.prototype, {
      _ideas: [],
      create: function(text) {
        this._ideas.push(text);
      },
      getAll: function() {
        return this._ideas;
      },
      all: function() {
        return this._ideas;
      },
      addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
      }
    });

    ideas = TestUtils.renderIntoDocument(ideas);
  });

  it('should render the body', function(){
    expect(ideas.refs.body).to.be.ok();
  });

});
