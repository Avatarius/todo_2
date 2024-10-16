beforeEach(() => {
  cy.visit("http://localhost:8080/");
});

describe("[TodoList]", () => {
  it("Добавление нового Todo", () => {
    const input = cy.get("[data-testid=input]");
    const form = cy.get("[data-testid=form]");
    input.type("test");
    form.submit();
    input.type("test2");
    form.submit();
    cy.get("[data-testid=list]").find("li").should("have.length", 5);
  });
  it("Удаление Todo", () => {
    const removeBtn = cy
      .get("[data-testid=list] > li")
      .eq(1)
      .find("[data-remove-button]");
    removeBtn.click();
    cy.get("[data-testid=list]").find("li").should("have.length", 2);
  });
  it("Изменение статуса Todo", () => {
    const btn = cy
      .get("[data-testid=list] > li")
      .eq(0)
      .find("[data-testid=buttonCheckmark]");
    const svg = btn.find('svg');
    svg.should("have.css", "opacity", "0");
    btn.click();
    svg.should("have.css", "opacity", "1");
  });
});
