using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(NumericSequences.Web.Startup))]

namespace NumericSequences.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
