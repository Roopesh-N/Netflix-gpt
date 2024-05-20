import OpenAI from 'openai';
import { OPENAI_KEY} from './firebase';

const openAI = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser:true,
});

export default openAI