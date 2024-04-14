import React from 'react'
import renderer from 'react-test-renderer'
import { Dots } from '../src/index'
import { afterAll, expect, vi } from 'vitest';

test('Renderer the HOC with normal usage', () => {
    const component = renderer.create(
        <Dots />,
    )

    const componentJson = component.toJSON()
    expect(componentJson.children.length).toBe(3 * 3 + 3)
})

test('Renderer the HOC with row col props', () => {
    const row = 20
    const col = 20

    const component = renderer.create(
        <Dots row={row} col={col}/>,
    )

    const componentJson = component.toJSON()
    expect(componentJson.children.length).toBe(row * col + row)
})

test('Renderer the HOC with other row col props', () => {
    const row = 10
    const col = 20

    const component = renderer.create(
        <Dots row={row} col={col}/>,
    )

    const componentJson = component.toJSON()
    expect(componentJson.children.length).toBe(row * col + col)
})

test('Renderer the HOC click', () => {

    const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    afterAll(() => {
        consoleMock.mockReset();
    });

    const component = renderer.create(
        <Dots onItemClick={consoleMock} color='#FF00FF'/>,
    )

    component.root.findByType("div").props.children[0].props.children[0][0].props.children.props.onClick();
    expect(consoleMock).toHaveBeenCalledOnce();

})