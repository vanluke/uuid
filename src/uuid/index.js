const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

export default function () {
    let date = new Date().getTime();

    return	uuid.replace(/[xy]/g, function(c) {
	        const r = (date + Math.random()*16)%16 | 0;
	        date = Math.floor(date / 16);
	        return (c === 'x' ? r : (r&0x3|0x8)).toString(16);
    });
};
