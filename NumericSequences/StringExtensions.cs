using System.Text;

namespace NumericSequences
{
    public static class StringExtensions
    {
        public static string AddSpacesAfterCapitals(this string s)
        {
            if (string.IsNullOrWhiteSpace(s))
                return s;

            var buf = new StringBuilder(s.Length << 1);
            foreach (char letter in s)
            {
                if (char.IsUpper(letter) && buf.Length > 0)
                    buf.Append(' ');

                buf.Append(letter);
            }
            return buf.ToString();
        }
    }
}
