from dotagent import compiler

def test_less():
    """ Test the behavior of `less`.
    """

    program = compiler("""{{#if (less val 5)}}less{{else}}not less{{/if}}""")
    assert str(program(val=6)) == "not less"
    assert str(program(val=4)) == "less"
    assert str(program(val=4.3)) == "less"

def test_less_infix():
    """ Test the behavior of `less` used as `<`.
    """

    program = compiler("""{{#if val < 5}}less{{else}}not less{{/if}}""")
    assert str(program(val=6)) == "not less"
    assert str(program(val=4)) == "less"
    assert str(program(val=4.3)) == "less"