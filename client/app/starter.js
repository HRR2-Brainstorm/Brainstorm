React.render(
  React.createElement(app.BrainstormApp, null),
  document.getElementById('main')
);

if (document.location.hash.substr(3, 5) === 'rooms'){
  app.PageActions.navigate({

    dest: 'rooms',
    props: document.location.hash.substr(9)

  });
} else {
  app.PageActions.navigate({

    dest: 'welcome'

  });
}
