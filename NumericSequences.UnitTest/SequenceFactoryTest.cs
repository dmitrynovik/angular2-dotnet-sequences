using NUnit.Framework;

namespace NumericSequences.UnitTest
{
    [TestFixture]
    public class SequenceFactoryTest
    {
        [Test]
        public void Sequence_Creation_Is_Ok()
        {
            var factory = new SequenceFactory();
            var seq = factory.Create<int>("FibonacciNumbers", 1);
            Assert.IsNotNull(seq);
        }
    }
}
