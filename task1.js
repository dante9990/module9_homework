const parser = new DOMParser();

const xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');
const nameNode = listNode.querySelectorAll('name');
const nameFirstNode = listNode.querySelectorAll('first');
const nameSecondNode = listNode.querySelectorAll('second');
const ageNode = listNode.querySelectorAll('age');
const profNode = listNode.querySelectorAll('prof');

const langAttrEn = nameNode[0].getAttribute('lang');
const langAttrRu = nameNode[1].getAttribute('lang');

const result = {
    list: [
        {
            name: `${nameFirstNode[0].textContent} ${nameSecondNode[0].textContent}`,
            age: Number(ageNode[0].textContent),
            prof: profNode[0].textContent,
            lang: langAttrEn
        },
        {
            name: `${nameFirstNode[1].textContent} ${nameSecondNode[1].textContent}`,
            age: Number(ageNode[1].textContent),
            prof: profNode[1].textContent,
            lang: langAttrRu
        }
    ]
}

console.log(result);