using System.Collections.Generic;

namespace NumericSequences
{
    public interface ISequence<out T>
    {
        IEnumerable<T> Enumerate();
        IEnumerable<string> Print();
    }
}