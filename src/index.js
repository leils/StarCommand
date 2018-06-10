import Amplify from 'aws-amplify';
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);

import App from './App';
export default App;
