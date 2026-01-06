const fs = require('fs');

fs.mkdir('./new_folder', (err) => {
    if (err) {
        console.error('Error creating directory:', err.message);
    } else {
        console.log('Directory created successfully');
    }
}); 



