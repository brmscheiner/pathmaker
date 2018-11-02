# pathmaker
Make common shapes with svg paths. Arcs, wedges, rectangles, and regular polygons. 

### installation 
Pathmaker has no dependencies and is Xkb.
`yarn install pathmaker`

### API 
Pathmaker is composed of four simple functions - makeRegularPolygon, makeRectangle, makeArc, and makeWedge. These functions return attributes that help you easily create polygons. 

```
import { makeRegularPolygon, makeRectangle, makeArc, makeWedge } from 'pathmaker'

<svg>
  <polygon points={makeRegularPolygon({ sides: 5, radius: 50 })} stroke="firebrick" />
  <path d={makeArc({ startAngle: 0, endAngle: 0.5 * Math.PI, radius: 50 })} stroke="slategrey" />
  <polygon d={makeWedge({ startAngle: 0.5 * Math.PI, endAngle: 0, radius: 50 })} fill="orange" />
</svg>
```

Arc
length (required) - the distance from the origin to the end of the arc 

### FAQ 
Why `makeRectangle`? Can't I just use `<rect>`?
Of course you can, and in most cases you should. Only use `makeRectangle` if you need rounded corners or you need to style your rectangle as a path. 