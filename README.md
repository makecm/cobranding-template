# Make Cobranding Template

This template makes cobranding logos: 

<img src="https://cdn.make.cm/make/s/cobrand?format=png&customSize[width]=660&customSize[height]=180&customSize[unit]=px&data[color]=rgba(150,150,150,.5)&data[type]=bar&allowTransparency=true&data[host]=https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg&data[guest]=https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" alt="" />


 "host": "https://yoururl/yourlogo.svg",
 "guest": "https://theirurl/theirlogo.svg",
 "color": "",
 "type": "bar"
 

### supported cobranding types
bar, vs, x, +
 
  
## Development server

Install all necessary dependencies `yarn install`

Run `yarn start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Building for Make

Run `yarn build` to build the project with correct resource pathing for the sake of deploying to make.

The build artifacts will be stored in the `/build` directory.

## Importing into Make

When importing into Make be sure to import from the `/build` folder.

The following `data` inputs are available as well.

- `headline`: string
- `backgroundImage`: string (public URL)
- `showLogos`: boolean

## Support

Here are some helpful links to get you started
- [Docs](https://docs.make.cm): First point of call
- [Twitter](https://twitter.com/home): Drop us a message on twitter if you find a bug or have any feedback
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
