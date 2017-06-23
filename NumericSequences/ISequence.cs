using System.Collections.Generic;

namespace NumericSequences
{
    public interface ISequence<out T>
    {
        string Name { get; }

        IEnumerable<T> Enumerate();

        IEnumerable<string> Print();
    }
}