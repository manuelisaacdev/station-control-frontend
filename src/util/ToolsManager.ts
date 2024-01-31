class ToolsManager {
    generateColor(str: string) {
        let hash = 0;
        str.split('').forEach(char => {
        hash = char.charCodeAt(0) + ((hash << 5) - hash)
        })
        let colour = '#'
        for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff
        colour += value.toString(16).padStart(2, '0')
        }
        return colour
    };

    scrollTop() {
        window.scrollTo({behavior: "smooth", top: 0});
    }
}

const toolsManager = new ToolsManager();
export default toolsManager;