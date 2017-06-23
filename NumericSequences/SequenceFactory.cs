using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace NumericSequences
{
    public class SequenceFactory
    {
        public ISequence<T> Create<T>(string name, int limit)
        {
            var type = Type.GetType($"NumericSequences.{name}");
            if (type == null)
                throw new ArgumentException($"Sequence '{name}' does not exist", nameof(name));

            return (ISequence<T>) Activator.CreateInstance(type, limit);
        }

        public IEnumerable<ISequence<T>> CreateAll<T>(T limit)
        {
            var types = Assembly.GetExecutingAssembly().GetTypes()
                .Where(t => typeof(ISequence<T>).IsAssignableFrom(t));

            foreach (var type in types)
            {
                yield return (ISequence<T>) Activator.CreateInstance(type, limit);
            }
        }
    }
}
