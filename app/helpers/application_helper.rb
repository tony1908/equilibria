module ApplicationHelper
  def title(value)
    unless value.nil?
      @title = "#{value} | Equilibria"
    end
  end
end
