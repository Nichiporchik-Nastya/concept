const author_table = document.body.querySelector(".author_info");

var text, parser, xmlDoc;
text = "<information><author><name>Ничипорчик Анастасия</name><specialty> ДЭиВИ</specialty><university> БГТУ</university><year> 2021</year></author></information>";
parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

psychologistList = xmlDoc.querySelector("author");
var content = '<table style="border-collapse: separate;">';

content += "<tr>"; /* добавить строку */

if (typeof psychologistList.tagName != "undefined") {
    content += "<td>" + psychologistList.innerHTML + "</td>"; /* добавить столбик */
}
content += "</tr>";
content += "</table>"

author_table.innerHTML+=content;

/* <?xml version="1.0" encoding="UTF-8"?>
					<?xml-stylesheet type="text/xsl" href="xml/author_table.xsl"?>
					<information>
						<author>
							<name>Ничипорчик Анастасия</name>
							<specialty>ДЭиВИ</specialty>
							<university>БГТУ</university>
							<year>2021</year>
						</author>
					</information> */
