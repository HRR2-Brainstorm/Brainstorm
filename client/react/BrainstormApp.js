app.BrainstormApp = React.createClass({
  render: function(){
    return (
      <div>
        <app.User />
        <app.CreateIdea />
        <app.Ideas />
      </div>
    );
  }
});
