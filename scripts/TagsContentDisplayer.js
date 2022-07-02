let TagsData = 
    [
        {
            name: "h1",
            job: "the most important heading (one and only for each page)",
            resource:"https://www.w3schools.com/TAgs/tag_hn.asp"
        },
        {
            name: "h2",
            job: "Less important heading than h1",
            resource:"https://www.w3schools.com/TAgs/tag_hn.asp"
        },
        {
            name: "h3",
            job: "Less important heading than h2",
            resource:"https://www.w3schools.com/TAgs/tag_hn.asp"
        },
        {
            name: "h4",
            job: "less important heading than h3",
            resource:"https://www.w3schools.com/TAgs/tag_hn.asp"
        },
        {
            name: "h5",
            job: "less important heading than h4",
            resource:"https://www.w3schools.com/TAgs/tag_hn.asp"
        },
        {
            name: "h6",
            job: "less important heading than h5",
            resource:"https://www.w3schools.com/TAgs/tag_hn.asp"
        },
        {
            name: "a",
            job: "to go to another place",
            resource:"https://www.w3schools.com/TAgs/tag_a.asp"
        },
        {
            name: "abbr",
            job: "to add an abbreviation for the real words which appear when hovering",
            resource:"https://www.w3schools.com/TAgs/tag_abbr.asp"
        },
        {
            name: "address",
            job: "to add contact information (phone number, e-mail, etc..)",
            resource:"https://www.w3schools.com/TAgs/tag_address.asp"
        },
        {
            name: "area",
            job: "used with map (to construct a clickable area on image transfering you to another place)",
            resource:"https://www.w3schools.com/TAgs/tag_area.asp"
        },
        {
            name: "article",
            job: "to add an article (SEO)",
            resource:"https://www.w3schools.com/TAgs/tag_article.asp"
        },
        {
            name: "aside",
            job: "to add a sidebar (SEO)",
            resource:"https://www.w3schools.com/TAgs/tag_aside.asp"
        },
        {
            name: "audio",
            job: "to add a sound file",
            resource: "https://www.w3schools.com/TAgs/tag_audio.asp"
        },
        {
            name: "b",
            job: "to make some text bold",
            resource:"https://www.w3schools.com/TAgs/tag_b.asp"
        },
        {
            name: "base",
            job: "adding a default href and target for all relative URLs (it should be nested within the head tag)",
            resource:"https://www.w3schools.com/TAgs/tag_base.asp"
        },
        {
            name: "bdi",
            job: "to isolute the unknown direction or right-direction text (some problems happen when left/right direction text meet)",
            resource: "https://www.w3schools.com/TAgs/tag_bdi.asp"
        },
        {
            name: "bdo",
            job: "override the current text direction with the mentioned one with dir attribute (hello:olleh)",
            resource:"https://www.w3schools.com/TAgs/tag_bdo.asp"
        },
        {
            name: "blockquote",
            job: "to add a quotation (SEO)",
            resource: "https://www.w3schools.com/TAgs/tag_blockquote.asp"
        },
        {
            name: "br",
            job: "insert single line break",
            resource: "https://www.w3schools.com/TAgs/tag_br.asp"
        },
        {
            name: "button",
            job: "to insert a clickable button",
            resource:"https://www.w3schools.com/TAgs/tag_button.asp"
        },
        {
            name: "canvas",
            job: "a container for all graphics drown via javascript",
            resource: "https://www.w3schools.com/TAgs/tag_canvas.asp"
        },
        {
            name: "caption",
            job: "to insert a caption for a table (words describe it)",
            resource:"https://www.w3schools.com/TAgs/tag_caption.asp"
        },
        {
            name: "cite",
            job: "for the title of some creative work (it just makes the text italic but its actual value for SEO)",
            resource: "https://www.w3schools.com/TAgs/tag_cite.asp"
        },
        {
            name: "code",
            job: "to define some text as computer code (just make its font as monospace font)",
            resource:"https://www.w3schools.com/TAgs/tag_code.asp"
        },
        {
            name: "col",
            job: "a container for all graphics drown via javascript",
            resource: "https://www.w3schools.com/TAgs/tag_col.asp"
        },
    ]

let container = document.getElementById("container")
for(let i=0; i<TagsData.length; i++){
    const element = `
        <div class="element">
            <a href=${TagsData[i].resource} target="_blank">
                <span class="element-name">${TagsData[i].name}</span>
                <div class="element-description">
                    <p class="element-job">${TagsData[i].job}</p>
                    <a href=${TagsData[i].resource} target="_blank">resource</a>
                </div>
            </a>
        </div>`
    container.innerHTML += element
}




