import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {

    images: {
        unoptimized: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'assets', 'styles')],
        prependData: `@import "_variables.scss";`
    }
};

export default nextConfig;
