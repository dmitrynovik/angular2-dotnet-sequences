using Microsoft.Owin.Security.OAuth;

namespace NumericSequences.Web
{
    public partial class Startup
    {
        public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }

        public static string PublicClientId { get; private set; }
    }
}
