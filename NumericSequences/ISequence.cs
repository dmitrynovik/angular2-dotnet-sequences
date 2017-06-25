using System.Collections.Generic;

namespace NumericSequences
{
    public interface ISequence<out T>
    {
        string Name { get; }

        string Description { get; }

        IEnumerable<T> Enumerate();

        IEnumerable<string> Print();
    }
}