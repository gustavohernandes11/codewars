# Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

defmodule Codewars do
  def remove_exclamation_marks(s) do
    String.replace(s, "!", "")
  end
end
