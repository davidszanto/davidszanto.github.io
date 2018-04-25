using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ChildrenRegistrationTableGenerator
{
    class Program
    {
        private static string filePath = @"C:\xampp\htdocs\davidszanto.github.io\napkozis2018\regisztraciok.html";

        static void Main(string[] args)
        {
            HttpWebRequest getRequest = WebRequest.CreateHttp("http://napkozishet.dataglobe.eu/2018/resztvevok.php");
            var response = getRequest.GetResponse();

            using (var stream = response.GetResponseStream())
            {
                using(var memStream = new MemoryStream())
                {
                    byte[] buffer = new byte[2048]; // read in chunks of 2KB
                    int bytesRead;
                    while ((bytesRead = stream.Read(buffer, 0, buffer.Length)) > 0)
                    {
                        memStream.Write(buffer, 0, bytesRead);
                    }
                    byte[] result = memStream.ToArray();
                    var htmlString = Encoding.UTF8.GetString(result);

                    var tableContent = GetChildrenTableFromHTML(htmlString);
                    PasteIntoPage(tableContent);
                }
            }
        }

        private static string GetChildrenTableFromHTML(string htmlString)
        {
            string tableString = htmlString.Substring(htmlString.IndexOf("<table"), htmlString.IndexOf("</table>") - htmlString.IndexOf("<table") + 8);

            while (tableString.Contains("align"))
            {
                tableString = tableString.Remove(tableString.IndexOf("align"), 12);
            }

            while (tableString.Contains("bgcolor='#"))
            {
                tableString = tableString.Remove(tableString.IndexOf("bgcolor='#"), 17);
            }

            tableString = tableString.Replace("<table border=0 cellpadding=\"1\" cellspacing=\"0\">", "<table class=\"table gyerekek\" style=\"width: 100% \">");
            tableString = tableString.Remove(tableString.IndexOf("height"), 9);
            tableString = tableString.Replace("bgcolor='white'", "").Replace("<tr >", "<tr>").Replace("<tr  >", "<tr>").Replace("<td >", "<td>").Replace("<td  >", "<td>");

            string[] headers = tableString.Substring(tableString.IndexOf("<tr>"), tableString.IndexOf("</tr>") - tableString.IndexOf("<tr>")).Split(new string[] { "<td>" }, StringSplitOptions.None);

            int pasteIntex = tableString.IndexOf("<tr>");
            tableString = tableString.Remove(tableString.IndexOf("<tr>"), tableString.IndexOf("</tr>") - tableString.IndexOf("<tr>") + 5);

            StringBuilder headerStringBuilder = new StringBuilder();

            headerStringBuilder.Append("<thead class=\"thead-dark\"><tr>");

            foreach (var header in headers)
            {
                if(header.Contains("<b>"))
                    headerStringBuilder.Append("<th>" + header.Substring(header.IndexOf("<b>") + 3, header.IndexOf("</b>") - header.IndexOf("<b>") - 3) + "</th>");
            }

            headerStringBuilder.Append("</tr></thead>");

            tableString = tableString.Insert(pasteIntex, headerStringBuilder.ToString());

            return tableString;
        }

        private static void PasteIntoPage(string tableContent)
        {
            string htmlContent = File.ReadAllText(filePath);
            int pasteIndex = htmlContent.IndexOf("<table class=\"table gyerekek\"");

            htmlContent = htmlContent.Remove(htmlContent.IndexOf("<table class=\"table gyerekek\""), htmlContent.IndexOf("</table>") - htmlContent.IndexOf("<table class=\"table gyerekek\"") + 8);

            htmlContent = htmlContent.Insert(pasteIndex, tableContent);

            File.WriteAllText(filePath, htmlContent);
        }
    }
}
