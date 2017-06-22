using System;

namespace NumericSequences
{
    public class SequenceFactory
    {
        public ISequence<T> Create<T>(string name, int limit)
        {
            var type = Type.GetType($"NumericSequences.{name}");
            if (type == null)
                throw new ArgumentException($"Sequence '{name}' does not exist", nameof(name));

            return (ISequence<T>) Activator.CreateInstance(type, new object[] { limit });
        }
    }
}
